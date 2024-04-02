<?php

use Illuminate\Support\Facades\Route;

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