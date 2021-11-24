"use strict"
// Inputs
const inputs = document.querySelectorAll('.calc_input');
const inputsGen = document.querySelectorAll('.calc_input--gen');
const block = document.querySelector('.calc_input_block');
const complexBlock = document.querySelector('.calc_input_complex-block');
const menu = document.querySelector('.calc_input_menu');
const formSimple = document.querySelector('.calc_input_form-simple');
const formComplex = document.querySelector('.calc_input_form-complex');
const slider = document.querySelector('.calc_input_slider');
const video = document.querySelector('.calc_input_video');
const table = document.querySelector('.calc_input_table');
const select = document.querySelector('.calc_input_select');
const pagination = document.querySelector('.calc_input_pagination');
const adaptive = document.querySelector('.calc_input_adaptive');
adaptive.checked = false;

// Button
const total = document.querySelector('.btn_total');

// Out
const out = document.querySelector('.out');

// Price

const blockPrice = 300;
const complexBlockPrice = 500;
const menuPrice = 500;
const formSimplePrice = 300;
const formComplexPrice = 500;
const sliderPrice = 500;
const videoPrice = 500;
const tablePrice = 500;
const adaptivePrice = 150;
const selectPrice = 200;
const paginationPrice = 150;

inputs.forEach(item => item.value=0);

total.addEventListener('click', function(e) {
    e.preventDefault();

const inputsGenArray = Array.from(inputsGen);

const inputsGenArrayValues = inputsGenArray.map(item => +item.value);

    const totalBlocks = function (arr) {
        return arr.reduce((acc,el)=> acc+el,0);
    }

    const totalPrice = function (inp,price) {
        return +inp.value * price
    }
    const totalAdaptivePrice = function(){
        if (adaptive.checked) {
            return totalBlocks(inputsGenArrayValues) * adaptivePrice;
        }else {
            return 0;
        }
    }
const totalAdaptive = totalAdaptivePrice();
    
const totalBlockPrice = totalPrice(block,blockPrice);
const totalComplexBlockPrice = totalPrice(complexBlock,complexBlockPrice);
const totalMenuPrice = totalPrice(menu,menuPrice);
const totalFormSimplePrice = totalPrice(formSimple,formSimplePrice);
const totalFormComplexPrice = totalPrice(formComplex,formComplexPrice);
const totalSliderPrice = totalPrice(slider,sliderPrice);
const totalVideoPrice = totalPrice(video,videoPrice);
const totalTablePrice = totalPrice(table,tablePrice);
const totalSelectPrice = totalPrice(select,selectPrice);
const totalPaginationPrice = totalPrice(pagination,paginationPrice);

const generalArray = [totalBlockPrice,totalComplexBlockPrice,totalMenuPrice,totalFormSimplePrice,totalFormComplexPrice,totalSliderPrice,totalVideoPrice,totalTablePrice,totalSelectPrice,totalPaginationPrice,totalAdaptive];

out.innerHTML = generalArray.reduce((acc,el) => acc+el,0 );
});

