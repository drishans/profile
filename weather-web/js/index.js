$(document).ready(function() {
    const apiKey = "5bc82451636190abd9d7afe6fe9b20b5" // Enter the API key
    console.log(`state_info is: ${state_info}`) // Notice the templating here, use that when you form your url

    // Helper functions
    function getFarenheitTemp(temp){
      return (9*temp/5)+32;
    }
    // TODO
    // Iterate over the state_info array and call the api for each state_name to get the current temperature
    // Example to call the api using state_name
    // This should be done inside the for loop
    Object.keys(state_info).forEach(function(key, index) {
        let state_obj = state_info[key]
        let url =`https://api.weatherstack.com/forecast?access_key=`+apiKey+`&query=`+state_obj.lat+`,`+state_obj.lng;
        // make 50 calls to the api :/
        $.ajax({url:url, dataType:"jsonp"}).then(function(data) {

                    console.log(data)
                    
                    // TODO
                    // Fill in the RHS of the below line and uncomment it. Remember how we accessed the temperature in Lab 9. Remember to convert it into farenheit.
                    var temperature = getFarenheitTemp(data.current.temperature);

                    console.log(temperature)

                    // TODO
                    // Default color gray
                    // Create a series of if else blocks to set the color for the state based on the temperature
                    // Less than equal to 10F	#6495ED
                    // Between 11F and 20F	#7FFFD4
                    // Between 21F and 30F	#0000FF
                    // Between 31F and 40F	#008B8B
                    // Between 41F and 50F	#00BFFF
                    // Between 51F and 60F	#F08080
                    // Between 61F and 70F	#CD5C5C
                    // Between 71F and equal to 80F	#8B0000
                    // Between 81F and equal to 90F	#B22222
                    // Greater than 90F	#FF0000
                    switch(true) {
                        case temperature > 90:
                            $(`#${key}`).css('fill', "#FF0000");
                            break;
                        case temperature > 80:
                            $(`#${key}`).css('fill', "#B22222");
                            break;
                        case temperature > 70:
                            $(`#${key}`).css('fill', "#8B0000");
                            break;
                        case temperature > 60:
                            $(`#${key}`).css('fill', "#CD5C5C");
                            break;
                        case temperature > 50:
                            $(`#${key}`).css('fill', "#F08080");
                            break;
                        case temperature > 40:
                            $(`#${key}`).css('fill', "#00BFFF");
                            break;
                        case temperature > 30:
                            $(`#${key}`).css('fill', "#008B8B");
                            break;
                        case temperature > 20:
                            $(`#${key}`).css('fill', "#0000FF");
                            break;
                        case temperature > 10:
                            $(`#${key}`).css('fill', "#7FFFD4");
                            break;
                        case temperature <= 10:
                            $(`#${key}`).css('fill', "#6495ED");
                            break;
                        default:
                            $(`#${key}`).css('fill', "grey");
                    }

                    //$('#CO').css('fill', "#F08080");   // Example on how to fill colors for your state.
        });
    });
});
