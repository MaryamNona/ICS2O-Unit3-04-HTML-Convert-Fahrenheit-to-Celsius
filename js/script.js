// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Maryam Nona
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"

function addAgeClicked () {
  // this function does area 

  // input
  const fahrenheit = parseFloat(document.getElementById("fahrenheit-degree").value)

  // process
  const celsius = (fahrenheit - 32) * 5 / 9

  // output
  document.getElementById('celsius').innerHTML = "C° = " + celsius
}
