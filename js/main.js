let total =0;
const input=1;
var pageInput =document.querySelector('input');
var runningTotal = document.getElementById('running-total');
function render()
{
    pageInput.value = input;
    runningTotal.textContent = total;
}
function addToTotal()
{
    if(parseInt(pageInput.value))
    {
        total+=parseInt(pageInput.value);
    }
    else
    {
        alert('Please enter a number');
    }
    render();
}
function minusTotal()
{
    if(parseInt(pageInput.value))
    {
        total-=parseInt(pageInput.value);
    }
    else
    {
        alert('Please enter a number');
    }
    render();
}
render();