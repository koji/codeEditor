function compile() {
    let js = document.getElementById("js");
    let html = document.getElementById("html");
    let css = document.getElementById("css");
    let code = document.getElementById("code").contentWindow.document;

    document.body.onkeyup = function() {
        code.open();
        code.writeln(html.value+"<style>"+css.value+"</style>"+"<script>" + js.value + "</script>");
		code.close();
    }
}

compile();