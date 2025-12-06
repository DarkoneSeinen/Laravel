<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('cars')->insert([
            ['make' => 'Toyota', 'model' => 'Camry', 'year' => 2020, 'color' => 'Blue'],
            ['make' => 'Honda', 'model' => 'Civic', 'year' => 2019, 'color' => 'Red'],
            ['make' => 'Ford', 'model' => 'Mustang', 'year' => 2021, 'color' => 'Black'],
        ]);
    }
}