<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request){
        // dd ($request->all());
        $validate = Validator::make($request->all(),[
            'name' => 'required|string|max:250',
            'email' => 'required|string|email:rfc,dns|max:250|unique:users,email',
            'password' => 'required|string|min:8|confirmed'
        ]);
        if($validate->fails()){
            return response()->json([
                'status' => 'failed',
                'message' => 'Validation Error!',
                'data' => $validate->errors(),
            ], 403);
        }
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);
        $data['token'] = $user->createToken($request->email)->accessToken;
        $data['user'] = $user;
        $response = [
            'status' => 'success',
            'message' => 'User is created successfully.',
            'data' => $data,
        ];
        return response()->json($response, 201);
    }

    public function login(Request $request){
        $validate = Validator::make($request->all(),[
            'email' => 'required|string|email',
            'password' => 'required|string'
        ]);
        if($validate->fails()){
            return response()->json([
                'status' => 'failed',
                'message' => 'Validate error',
                'data' => $validate->errors(),
            ],403);
        }
        // kiểm tra email có tồn tại chưa
        $user = User::where('email',$request->email)->first();
        // kiểm tra password
        if(!$user || !Hash::check($request->password,$user->password)){
            return response()->json([
                'status'=>'failse',
                'message' => 'Validate pass errors'
            ],401);
        }
        $data['token'] = $user->createToken($request->email)->accessToken;
        $data['user'] = $user;
        $response = [
            'status' => 'success',
            'message' => 'Login successfuly',
            'data' => $data,
        ];
        return response()->json($response,200);
    }
    public function id($id)
    {
        $users = User::find($id);
        return response()->json($users);
    }
}
