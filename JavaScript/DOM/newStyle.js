

//manipulando o css

const body = document.querySelector('body')

body.innerHTML=`

<div id="master" class="container border">

<p id="p1" class="display-4 bg-dark text-light text-center"><strong>Query CSS</strong></p>
<div class="divGradientTop"></div>
<br>
<p id="p2">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
<div class='divGradientBottom'></div>

</div>

`
//modificando o css
const p1 = document.getElementById('p1')
p1.style.borderBottom="3px solid #7E5FFA"

const p2 = document.getElementById('p2')





