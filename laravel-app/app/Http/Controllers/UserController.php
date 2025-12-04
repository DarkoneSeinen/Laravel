<?php
    namespace App\Http\Controllers;

    use Illuminate\Http\Request;

    class UserController extends Controller{
        public function __construct()
        {
            //
        }

        public function index2(){
            //logica para obtener uan lista de usarios desde el modelo
            $user= User::all(); //suponiendo que tenemos un modelo User
            return view('user.index', ['users' => $user]);
        }

        public function index(){
            $name="andres";
            $apellido="gomez";
            $edad=25;
            return view('example', ['name' => $name, 'apellido' => $apellido, 'edad' => $edad]);

        }

        public function showname($name){
            return view('example', ['name' => $name]);
        }
    }