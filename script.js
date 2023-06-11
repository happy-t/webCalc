var string = "";
var buttons = document.querySelectorAll('.inner');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click',(e) => {
        let str = e.target.innerHTML;
        if(str == '=')
        {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(str == "C")
        {
            string = "";
            document.querySelector('input').value = string;
        }
        else
        {
            string += str;
            console.log(string);
            document.querySelector('input').value = string;
        }
    });
});
