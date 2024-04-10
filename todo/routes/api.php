<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\TodoController;
use App\Http\Controllers\TypeStatusController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::controller(AuthController::class)->group(function() {
    Route::post('/register', 'register');
    Route::post('/login', 'login');
    Route::get('/findId/{id}','id');
});

Route::get('/todoList',[TodoController::class,'index']);
Route::post('/createTodo',[TodoController::class,'store']);
Route::delete('/delete/{id}',[TodoController::class,'destroy']);
Route::get('/getByID/{id}',[TodoController::class,'id']);
Route::patch('/update/{id}',[TodoController::class,'update']);

Route::get('/type',[TypeStatusController::class,'indexStatus']);
