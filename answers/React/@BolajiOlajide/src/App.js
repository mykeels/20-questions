import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import Home from './components/Home';
import NameConcatenation from './components/NameConcatenation';
import Lottery from './components/Lottery';
import WordInReverse from './components/WordReverse';
import TypeReverse from './components/TypeReverse';
import TemperatureConverter from './components/TemperatureConverter';
import MultiplicationTable from './components/MultiplicationTable';
import FileReaderComponent from './components/FileReader';
import FileCombiner from './components/FileCombiner';
import RGBColorGenerator from './components/RGBColorGenerator';
import HexCodeGenerator from './components/HexCodeGenerator';
import FileExtension from './components/FileExtension';
import SalaryClassifier from './components/SalaryClassifier';
import TaxClassifier from './components/TaxClassifer';
import NumbersInWords from './components/NumbersInWords';
import CompoundInterest from './components/CompoundInterest';
import DecimalConverter from './components/DecimalConverter';
import BaseNConverter from './components/BaseNConverter';
import LoveCalculator from './components/LoveCalculator';
import SimpleCGPACalculator from './components/SimpleCGPACalculator';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/01-name-concatenation" component={NameConcatenation} />
        <Route path="/02-lottery" component={Lottery} />
        <Route path="/03-word-in-reverse" component={WordInReverse} />
        <Route path="/04-type-in-reverse" component={TypeReverse} />
        <Route path="/05-temperature-converter" component={TemperatureConverter} />
        <Route path="/06-multiplication" component={MultiplicationTable} />
        <Route path="/07-read-line" component={FileReaderComponent} />
        <Route path="/08-combine-files" component={FileCombiner} />
        <Route path="/09-rgb-color-generator" component={RGBColorGenerator} />
        <Route path="/10-hex-color-generator" component={HexCodeGenerator} />
        <Route path="/11-extract-extension" component={FileExtension} />
        <Route path="/12-extract-extension" component={SalaryClassifier} />
        <Route path="/13-tax-classifier" component={TaxClassifier} />
        <Route path="/14-number-in-words" component={NumbersInWords} />
        <Route path="/15-compound-interest" component={CompoundInterest} />
        <Route path="/16-convert-to-decimal" component={DecimalConverter} />
        <Route path="/17-convert-decimal-to-base-n" component={BaseNConverter} />
        <Route path="/18-simple-cgpa-calculator" component={SimpleCGPACalculator} />
        <Route path="/19-attendance" component={SimpleCGPACalculator} />
        <Route path="/20-love-calculator" component={LoveCalculator} />
        <Route path="*" component={Home} />
      </Switch>
    </Router>
  )
}

export default App;
