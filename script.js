function appendToResult(value)
{
        document.getElementById('result').value += value;
}

function clearResult()
{
        document.getElementById('result').value = '';
}

function calculate()
{
        try {
                document.getElementById('result').value = eval(document.getElementById('result').value);
        }
        catch (error)
        { 
                document.getElementById('result').value = 'Error';
        }
}
/*
async function fetchdata()
{
        const url = 'https://mathaas.p.rapidapi.com/add';
        const options =
        {
                method: 'GET',
                headers:
                {
		'X-RapidAPI-Key': '5435182214mshe11d8a4bebf2423p152360jsn7c6a498f890c',
		'X-RapidAPI-Host': 'mathaas.p.rapidapi.com'
                }
        };
        try {

                const response = await fetch(url, options);
                const result = await response.text();
                console.log(result);
        }
        catch (error)
        {
                console.error(error);
        }
};
*/

