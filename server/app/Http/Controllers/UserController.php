<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    //

    public function login(Request $request){
        $user = User::where('email', $request->email)->first();
        if ($user){
            return response()->json([
                'success' => true,
                'user' => $user
            ], 200);
        }
        else {
            return response()->json([
                'success' => false,
                'message' => 'You dont have an account',
            ], 401);
        }
    }
}
