<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Models\Todo;
use App\Models\TypeStatus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TodoController extends Controller
{
    // hiển thị danh sách todo app
    public function index(Request $request)
{
    $findByName = $request->input('findByName');
    $sortBy = $request->input('sortBy') ?? 'id';
    $sortOrder = $request->input('sortOrder') ?? 'desc';
    $userId = Auth::id();
    $doneStatusId = TypeStatus::where('type','done')->value('id');
    $todos = Todo::select('todos.id','todos.name', 'todos.description','type_statuses.type as type')
    ->leftJoin('type_statuses', 'type_statuses.id', '=', 'todos.status_id')
    ->leftJoin('users', 'users.id','=','todos.user_id')
    ->where('todos.name', 'like', '%' . $findByName . '%')
    ->where('todos.deleted', true)
    ->where('todos.user_id',$userId)
    ->where('todos.status_id',"!=",$doneStatusId)
    ->orderBy($sortBy, $sortOrder)
    ->get();
    return response()->json($todos);
}

    // những việc đã done

    public function fillter()
{
    $userId = Auth::id();
    $doneStatusId = TypeStatus::where('type','done')->value('id');
    $todos = Todo::select('todos.*','type_statuses.type as type')
    ->leftJoin('type_statuses', 'type_statuses.id', '=', 'todos.status_id')
    ->leftJoin('users', 'users.id','=','todos.user_id')
    ->where('todos.user_id',$userId)
    ->where('todos.status_id',"=",$doneStatusId)
    ->get();
    return response()->json($todos);
}

    // list archive todo

    public function archive(){
    $userId = Auth::id();
    $todos = Todo::select('todos.*','type_statuses.type as type')
    ->leftJoin('type_statuses', 'type_statuses.id', '=', 'todos.status_id')
    ->leftJoin('users', 'users.id','=','todos.user_id')
    ->where('todos.deleted',false)
    ->where('todos.user_id',$userId)
    ->get();
    return response()->json($todos);
    }

    // thêm mới todo

    public function store(Request $request)
{
    $name = $request->input('name');
    $time = $request->input('time');
    $day = $request->input('day');
    $description = $request->input('description');
    $status_id = $request->input('status_id');
    $user_id = Auth::id();
    if(isset($name) && isset($time) && isset($day) && isset($description) && isset($status_id)) {
        $result = DB::table('todos')->insert([
            'name' => $name,
            'time' => $time,
            'day' => $day,
            'description' => $description,
            'status_id' => $status_id,
            'user_id' => $user_id
        ]);
        if ($result) {
            return response()->json('Success');
        } else {
            return response()->json('Failed to create todo', 500);
        }
    } else {
        return response()->json('Invalid data format', 400);
    }
}

    // thêm vào archive

    public function destroy($id)
{
    $todo = Todo::where('user_id', Auth::id())->find($id);
    if($todo) {
        $todo->deleted = false;
        $todo->save();
        return response()->json('Archive todo success');
    } else {
        return response()->json('Archive fail', 404); 
    }
}

    // xóa khỏi archive

    public function restore($id)
    {
        $todo = Todo::where('user_id', Auth::id())->find($id);
        if($todo) {
            $todo->deleted = true;
            $todo->save();
            return response()->json('Archive todo success');
        } else {
            return response()->json('Archive fail', 404); 
        }
    }

    // Find by id
 
    public function id($id)
    {
        $todo = Todo::where('user_id', Auth::id())->find($id); 
        if ($todo) {
            return response()->json($todo);
        } else {
            return response()->json('Todo not found', 404);
        }
    }
    
    // Update todo App

    public function update(Request $request, $id)
{
    $todo = Todo::where('user_id', Auth::id())->find($id); 

    if (!$todo) {
        return response()->json('Todo not found', 404);
    }

    if ($request->has('status_id')) {
        $todo->status_id = $request->get('status_id');
    }
    
    $todo->name = $request->get('name');
    $todo->time = $request->get('time');
    $todo->day = $request->get('day');
    $todo->description = $request->get('description');
    $todo->save(); 
    return response()->json('Update todo success!');
}

    // thay đổi trạng thái done/undone

    public function status($id){
        $todo = Todo::where('user_id', Auth::id())->find($id);
        if($todo) {
            $StatusId = $todo->status_id === 1 ? 4 : 1; 
            $todo->status_id = $StatusId;
            $todo->save();
            return response()->json([$StatusId]); 
        } else {
            return response()->json('Update status fail', 404); 
        }
    }
    
    
}
