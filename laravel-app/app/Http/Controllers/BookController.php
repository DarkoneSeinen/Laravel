<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BookController extends Controller
{
    //
    public function index()
    {
        $books = Books::all();

        return view('books.index',['books' => $books]);
    }
}
