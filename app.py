from flask import Flask, render_template, Response, redirect, json, send_file

app = Flask(__name__)


@app.route("/", methods=['GET', 'POST'])
def index():
    with open("data/src.json", "r") as src_file:
        src_data = json.load(src_file)
    return render_template("index.html", features=src_data["FEATURES"],
                           sites1=src_data["SITES1"], sites2=src_data["SITES2"])


@app.route("/countdown", methods=['GET', 'POST'])
def countdown():
    return render_template("countdown.html")


@app.route("/favicon.ico")
def favicon():
    return send_file("static/src/logo/favicon.ico", mimetype="image/x-icon")


@app.route("/robots.txt")
def robots():
    robots_txt = "User-agent: *\nDisallow: /{url}\nDisallow: /cdn-cgi"
    return Response(robots_txt, mimetype="text/plain")


@app.errorhandler(404)
def error(e):
    return redirect("/")