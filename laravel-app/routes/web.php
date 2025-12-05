<?php
use App\Http\Controllers\UserController; // no olvidar importar el controlador
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

/*Route::get('/nuevavista', function () { // Nueva ruta para la nueva vista
    return view('nuevavista');
});

Route::get('/saludo/{nombre}', function ($nombre) { // ruta con parámetro
    return "hola, $nombre";
});
*/

//crear controlador
//Route::get('/usuarios',[UserController::class, 'index2']); //ruta que usa el controlador para mostrar usuarios

Route::get('/libros', [BookController::class, 'index']);