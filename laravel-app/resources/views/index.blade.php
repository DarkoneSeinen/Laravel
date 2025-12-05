<!DOCTYPE html>
<html>
<head>
    <title>Lista de libros</title>
</head>

<body>
    <h1>Lista de libros</h1>

    <ul>
        @foreach ($books as $book)
            <li>{{ $book->title }}</li>
        @endforeach
    </ul>
</body>
</html>