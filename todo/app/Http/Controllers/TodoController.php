<?php

namespace App\Http\Controllers;

use App\Models\Todo;
// use App\Models\TypeStatus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TodoController extends Controller
{
    // hiển thị danh sách todo app
    public function index(Request $request)
{
    $findByName = $request->input('findByName');
    $sortBy = $request->input('sortBy') ?? 'name';
    $sortOrder = $request->input('sortOrder') ?? 'asc';
    $todos = Todo::select('todos.id','todos.name', 'todos.description','type_statuses.type as type')
    ->leftJoin('type_statuses', 'type_statuses.id', '=', 'todos.status_id')
    ->where('todos.name', 'like', '%' . $findByName . '%')
    ->where('todos.deleted', true)
    ->orderBy($sortBy, $sortOrder)
    ->get();
    return response()->json($todos);
}

    // thêm mới todo
public function store(Request $request)
{
    $todoData = $request->input('todos');

    $result = DB::table('todos')->insert([
        'name' => $todoData['name'],
        'time' => $todoData['time'],
        'day' => $todoData['day'],
        'description' => $todoData['description'],
        'status_id' => $todoData['status_id']
    ]);

    if ($result) {
        return response()->json('Success');
    } else {
        return response()->json('Failed to create todo', 500);
    }
}

    // xóa todo app
    public function destroy($id)
    {
        $todo = Todo::find($id);
        if($todo) {
            $todo->deleted = false;
            $todo->save();
            return response()->json('delete todo success');
        } else {
            return response()->json('Delete fail');
        }
    }
    // Find by id
    public function id($id)
    {
        $todo = Todo::with('typeStatus')->find($id);
        return response()->json($todo);
    }
    // Update todo App
public function update(Request $request, $id)
{
    $todo = Todo::find($id);

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

}
