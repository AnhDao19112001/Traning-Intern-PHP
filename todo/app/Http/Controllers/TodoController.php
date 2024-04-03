<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TodoController extends Controller
{
    // hiển thị danh sách todo app
    // public function index(Request $request)
    // {
    //     $findByName = $request->input('findByName');
    //     $sortBy = $request->input('sortBy') ?? 'name';
    //     $sortOrder = $request->input('sortOrder') ?? 'asc';
    //     $todo = Todo::where('name','like','%' . $findByName . '%')
    //             -> where('deleted',true)
    //             -> orderBy($sortBy,$sortOrder)->get();
    //             return response()->json($todo);
    // }

    // show to-do list join to-do board with status
    public function index(Request $request)
{
    $findByName = $request->input('findByName');
    $sortBy = $request->input('sortBy') ?? 'name';
    $sortOrder = $request->input('sortOrder') ?? 'asc';
    $todos = Todo::select('todos.name', 'todos.description', DB::raw('COALESCE(type_statuses.type, "Not yet started") as type_name'))
    ->leftJoin('type_statuses', 'todos.id', '=', 'type_statuses.id')
    ->where('todos.name', 'like', '%' . $findByName . '%')
    ->where('todos.deleted', true)
    ->orderBy($sortBy, $sortOrder)
    ->get();
    return response()->json($todos);
}

    // thêm mới todo
    public function store(Request $request) 
    {
        $create = new Todo([
            'name' => $request->get('name'),
            'time' => $request->get('time'),
            'day' => $request->get('day'),
            'description' => $request->get('description'),
            'deleted' => true,
        ]);
        $create->save();
        return response()-> json('Create Todo success!');
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
    public function id ($id)
    {
        $todo = Todo::find($id);
        return response()->json($todo);
    }
    // Update todo App
    public function update (Request $request, $id)
    {
        $todo = Todo::find($id);
        $todo->name = $request->get('name');
        $todo->time = $request->get('time');
        $todo->day = $request->get('day');
        $todo->description = $request->get('description');
        $todo->save();
        return response()->json('Update todo success!');
    }
}
