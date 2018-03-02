$('input').on('change', function(evt){
    evt.preventDefault();
    console.log($(this).val())
})

$('#submit-btn').on('click', function(evt){
    evt.preventDefault();
    //find number of questions
    var count = $('#questions').children('form').length,
        questions = $('.question'),
        answers = [],
        firstName = $('#first_name').val(),
        lastName = $('#last_name').val(),
        picUrl = $('#picture_url').val()

        console.log(lastName, firstName, picUrl)
    //put answers into array
    for(var i = 0; i < count; i++){
        var answer = Number(questions[i].value)
        answers.push(answer)
    }

    console.log(answers)
    var postData = {
        firstName: firstName,
        lastName: lastName,
        picUrl: picUrl,
        scores: answers,
    }

    $.post('/api/friends', postData, function(data){
        console.log('Posted!')
        console.log(data)
        showMatch(data)
        $('input').val('')
    })
})

function showMatch (match) {
    $('#match_name').text(match.firstName + ' ' + match.lastName)
    $('#match_pic > img').attr('src', match.picUrl)
    $('#modal1').modal('open')
}

//Inits modal
$(document).ready(function(){
    $('.modal').modal();
  });