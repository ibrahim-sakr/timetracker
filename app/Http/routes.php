<?php
Route::get('/', function () {
    return view('index');
});

// A route group allows us to have a prefix, in this case api
Route::group(array('prefix' => 'api'), function()
{
    Route::resource('time', 'TimeEntriesController');
    Route::resource('users', 'UsersController');
});
