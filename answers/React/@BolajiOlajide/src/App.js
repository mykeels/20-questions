import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import Home from './components/Home';
import NameConcatenation from './components/01-NameConcatenation';
import Lottery from './components/02-Lottery';
import WordInReverse from './components/03-WordReverse';
import TypeReverse from './components/04-TypeReverse';
import TemperatureConverter from './components/05-TemperatureConverter';
import MultiplicationTable from './components/06-MultiplicationTable';
import FileReaderComponent from './components/07-FileReader';
import FileCombiner from './components/08-FileCombiner';
import RGBColorGenerator from './components/09-RGBColorGenerator';
import HexCodeGenerator from './components/10-HexCodeGenerator';
import FileExtension from './components/11-FileExtension';
import SalaryClassifier from './components/12-SalaryClassifier';
import TaxClassifier from './components/13-TaxClassifer';
import NumbersInWords from './components/14-NumbersInWords';
import CompoundInterest from './components/15-CompoundInterest';
import DecimalConverter from './components/16-DecimalConverter';
import BaseNConverter from './components/17-BaseNConverter';
import SimpleCGPACalculator from './components/18-SimpleCGPACalculator';
import Attendance from './components/19-attendance';
import LoveCalculator from './components/20-LoveCalculator';


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
        <Route path="/19-attendance" component={Attendance} />
        <Route path="/20-love-calculator" component={LoveCalculator} />
        <Route path="*" component={Home} />
      </Switch>
    </Router>
  )
}

export default App;
