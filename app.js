// https://calculator.swiftutors.com/fixed-asset-turnover-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const fixedAssetTurnoverRatioRadio = document.getElementById('fixedAssetTurnoverRatioRadio');
const salesCostRadio = document.getElementById('salesCostRadio');
const netFixedAssetsRadio = document.getElementById('netFixedAssetsRadio');

let fixedAssetTurnoverRatio;
let salesCost = v1;
let netFixedAssets = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

fixedAssetTurnoverRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Sales Cost';
  variable2.textContent = 'Net Fixed Assets';
  salesCost = v1;
  netFixedAssets = v2;
  result.textContent = '';
});

salesCostRadio.addEventListener('click', function() {
  variable1.textContent = 'Fixed Asset Turnover Ratio';
  variable2.textContent = 'Net Fixed Assets';
  fixedAssetTurnoverRatio = v1;
  netFixedAssets = v2;
  result.textContent = '';
});

netFixedAssetsRadio.addEventListener('click', function() {
  variable1.textContent = 'Fixed Asset Turnover Ratio';
  variable2.textContent = 'Sales Cost';
  fixedAssetTurnoverRatio = v1;
  salesCost = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(fixedAssetTurnoverRatioRadio.checked)
    result.textContent = `Fixed Asset Turnover Ratio = ${computeFixedAssetTurnoverRatio().toFixed(2)}`;

  else if(salesCostRadio.checked)
    result.textContent = `Sales Cost = ${computeSalesCost().toFixed(2)}`;

  else if(netFixedAssetsRadio.checked)
    result.textContent = `Net Fixed Assets = ${computeNetFixedAssets().toFixed(2)}`;
})

// calculation

function computeFixedAssetTurnoverRatio() {
  return Number(salesCost.value) / Number(netFixedAssets.value);
}

function computeSalesCost() {
  return Number(fixedAssetTurnoverRatio.value) * Number(netFixedAssets.value);
}

function computeNetFixedAssets() {
  return Number(salesCost.value) / Number(fixedAssetTurnoverRatio.value);
}