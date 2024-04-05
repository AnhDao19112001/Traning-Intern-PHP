<?php

namespace App\Http\Controllers;

use App\Models\TypeStatus;

class TypeStatusController extends Controller
{
    // show list status 
    public function indexStatus()
    {
        $type = TypeStatus::all();
        return response()->json($type);
    }
}
