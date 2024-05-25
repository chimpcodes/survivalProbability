# Survival Probability
A fun project to estimate group survival probabilities based on data from a popular survival reality show

## Background
The "XLR" is a subjective "black box" measure of the probabilty of a group of people to survive an extended stay in the wilderness for a set time with no food and minimal tools. By compiling a database of the show, we hope to generate an unbiased and objective measure of the probabilty of group survival given a set of known group characteristics and events. 

## Data
The data is contained in the data folder and consists of two spreadsheets in LibreOffice format. One sheet contains a list of all tapouts and their causes. The other consists of group attributes and events and the corresponding known survival rates.

## Prediction
Simple pattern matching (minimum abs difference) is used to find the 3 best matches. The survival rates are averaged together with a second result derived from multi-feature linear regression. As we progress, we plan to investigate using other non-linear methods of machine learning as well. 

## Modification
To run the regression code, the `test.js` file can be renamed to `test.html` (enclose the code in `<script>` tags). It can also be run by cloning the repo, opening the folder in Visual Studio Code and running `node test` in the terminal (nodeJS is required for this method).

##To-DO
1. Fact-check data in the groups spreadsheet (watching all episodes may be required!)
2. Create utility to import data from csv into both the training and index files


