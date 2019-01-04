<button onclick="someFunction()">Click me</button>

<p id="intro"></p>

<script>
{% assign someContent = "This is some content" %}
function someFunction() {
    document.getElementById("intro").innerHTML = someContent;
}
</script>
