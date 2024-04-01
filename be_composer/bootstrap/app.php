<?php

/*
|--------------------------------------------------------------------------
| Create The Application
|--------------------------------------------------------------------------
|
| Điều đầu tiên chúng ta sẽ làm là tạo một phiên bản ứng dụng Laravel mới
| đóng vai trò là "chất keo" cho tất cả các thành phần của Laravel và là
| bộ chứa IoC để hệ thống liên kết tất cả các bộ phận khác nhau.
|
*/

$app = new Illuminate\Foundation\Application(
    $_ENV['APP_BASE_PATH'] ?? dirname(__DIR__)
);

/*
|--------------------------------------------------------------------------
| Ràng buộc các giao diện quan trọng
|--------------------------------------------------------------------------
|
| Tiếp theo, chúng ta cần liên kết một số giao diện quan trọng vào vùng chứa để
| chúng ta sẽ có thể giải quyết chúng khi cần thiết. Hạt nhân phục vụ cho
| các yêu cầu gửi đến ứng dụng này từ cả web và CLI.
|
*/

$app->singleton(
    Illuminate\Contracts\Http\Kernel::class,
    App\Http\Kernel::class
);

$app->singleton(
    Illuminate\Contracts\Console\Kernel::class,
    App\Console\Kernel::class
);

$app->singleton(
    Illuminate\Contracts\Debug\ExceptionHandler::class,
    App\Exceptions\Handler::class
);

/*
|--------------------------------------------------------------------------
| Return The Application
|--------------------------------------------------------------------------
|
| Tập lệnh này trả về phiên bản ứng dụng. Ví dụ được đưa ra cho
| tập lệnh gọi để chúng tôi có thể tách biệt việc xây dựng các phiên bản
| từ việc chạy ứng dụng thực tế và gửi phản hồi.
|
*/

return $app;
