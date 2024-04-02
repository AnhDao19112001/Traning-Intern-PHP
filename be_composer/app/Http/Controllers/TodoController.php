<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $findByName =$request->input('findByName');
        $sortBy = $request->input('sortBy') ?? 'name_todo';
        $sortOder = $request->input('sortOrder') ?? 'asc';
        $todo = Todo::where('name_todo','like','%' . $findByName . '%')
        -> orderBy($sortBy,$sortOder)->get();
        Log::info('Danh sách todo: ' . $todo);
        return response() -> json($todo);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $todo = new Todo([
            'name_todo' => $request->get('name_todo'),
            'time' => $request->get('time'),
            'day' => $request->get('day'),
            'description' => $request->get('description')
        ]);
        $todo->save();
        return response()->json('Add Todo Success');
    }

    /**
     * Display the specified resource.
     */
    public function show(Todo $todo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Todo $todo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Todo $todo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Todo $todo)
    {
        //
    }
}
