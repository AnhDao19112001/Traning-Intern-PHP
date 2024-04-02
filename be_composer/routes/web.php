<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TodoController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Đây là nơi bạn có thể đăng ký các tuyến web cho ứng dụng của mình. Những cái này
| các tuyến đường được tải bởi RouteServiceProvider và tất cả chúng sẽ
| được gán vào nhóm phần mềm trung gian "web". Hãy làm điều gì đó tuyệt vời!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/todoList', [TodoController::class, 'index']);