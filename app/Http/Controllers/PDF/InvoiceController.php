<?php

namespace App\Http\Controllers\PDF;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class InvoiceController extends Controller
{

    public function shiftInvoice(Request $request){
        $motivo = $request->motivo;
        $name = $request->name;
        $email = $request->email;
        $phone = $request->phone;
        $date = $request->date;
        $time = $request->time;
        


        \PDF::setOptions(['dpi' => 150, 'defaultFont' => 'sans-serif']);   
        $pdf = \PDF::loadView('loadPDF/ShiftInvoice', compact('name','email','phone','motivo','date','time'));
        return $pdf->stream('CitaBrothersBarberShop.pdf');
    }
}
