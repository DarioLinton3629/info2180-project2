var tile;
var image;
var empty = '300px';
var em = '300px';
var test="url('f0d0cd339b2d4e909b6522766c74d76da69f9f62.jpg')";

window.onload = function ()
{
    setTiles();
    shuffle();
    changepic();    

};

/Change background picture/
function changepic(){
  var area = document.getElementById("controls");
  var i=0;
  var btn = document.createElement("BUTTON");
  var t = document.createTextNode("Change background picture");
  btn.appendChild(t);
  area.appendChild(btn);
  var images= ["url('f0d0cd339b2d4e909b6522766c74d76da69f9f62.jpg')","url('Snapchat-1332669597.jpg')","url('Untitled - Copy.png')","url('fcb_wallpaper_by_aminecube-d4726xb.jpg')"];
  btn.onclick= function(){
   test= images[i];
   i++;
   if(i>3){
    i=0;
   }
   setTiles();

  }
}


function setTiles(){
    var puzzle = document.getElementById('puzzlearea');
    
    tile = puzzle.getElementsByTagName('div');
     for (var i=0; i<tile.length; i++)
    {
        tile[i].style.backgroundImage=test;
        tile[i].style.backgroundSize ="400px 400px";        
        tile[i].className = 'puzzlepiece';
        tile[i].style.color= 'white';

        tile[i].style.left = (i%4*100)+'px';
        tile[i].style.top = (parseInt(i/4)*100) + 'px';
        tile[i].style.backgroundPosition= '-' + tile[i].style.left + ' ' + '-' + tile[i].style.top;
        tile[i].onmouseover = function()
        {
            if (move(parseInt(this.innerHTML)))
            {
                this.style.border = "2px solid red";
                this.style.color = "#006600";
            }
        };
        tile[i].onmouseout = function()
        {
            this.style.border = "2px solid black";

            this.style.color = 'white';
        };

        tile[i].onclick = function()
        {
            if (move(parseInt(this.innerHTML)))
            {
                swap(this.innerHTML-1);
                if (finish())
                {
                    Gamewin();
                }
                return;
            }
        };
    }
}

function shuffle(){
    var shuffle = document.getElementById('shufflebutton');
    shuffle.onclick = function()
    {

        for (var i=0; i<250; i++)
        {
            var rand = parseInt(Math.random()* 100) %4;
            if (rand == 0)
            {
                var mve = mveUp(empty, em);
                if ( mve != -1)
                {
                    swap(mve);
                }
            }
            if (rand == 1)
            {
                var mve = mveDown(empty, em);
                if ( mve != -1) 
                {
                    swap(mve);
                }
            }

            if (rand == 2)
            {
                var mve = mveLeft(empty, em);
                if ( mve != -1)
                {
                    swap(mve);
                }
            }

            if (rand == 3)
            {
                var mve = mveRight(empty, em);
                if (mve != -1)
                {
                    swap(mve);
                }
            }
        }
    };
}

function move(pos)
{
    if (mveLeft(empty, em) == (pos-1))
    {
        return true;
    }

    if (mveDown(empty, em) == (pos-1))
    {
        return true;
    }

    if (mveUp(empty, em) == (pos-1))
    {
        return true;
    }

    if (mveRight(empty, em) == (pos-1))
    {
        return true;
    }
}

function Gamewin()
{
    setTimeout(done,200);
    function done(){
      alert("you win");
      location.reload();

    }
}


function finish()
{
    var a = true;
    for (var i = 0; i < tile.length; i++) {
        var y = parseInt(tile[i].style.top);
        var x = parseInt(tile[i].style.left);

        if (x != (i%4*100) || y != parseInt(i/4)*100)
        {
            a = false;
            break;
        }
    }
    return a;
}

function swap (pos) {
    var temp = tile[pos].style.top;
    tile[pos].style.top = em;
    em = temp;

    temp = tile[pos].style.left;
    tile[pos].style.left = empty;
    empty = temp;
}

function mveRight (x, y) {
    var a = parseInt(x);
    var b = parseInt(y);
    if (a < 300)
    {
        for (var i =0; i<tile.length; i++){
            if (parseInt(tile[i].style.left) - 100 == a && parseInt(tile[i].style.top) == b) 
            {
                return i;
            }
        }
    }
    else
    {
        return -1;
    } 
}
function mveLeft(x, y)
{
    var a = parseInt(x);
    var b = parseInt(y);

    if (a > 0)
    {
        for (var i = 0; i < tile.length; i++) 
        {
            if (parseInt(tile[i].style.left) + 100 == a && parseInt(tile[i].style.top) == b)
            {
                return i;
            } 
        }
    }
    else 
    {
        return -1;
    }
}


function mveDown (x, y)
{
    var a = parseInt(x);
    var b = parseInt(y);
    if (b < 300)
    {
        for (var i=0; i<tile.length; i++)
        {
            if (parseInt(tile[i].style.top) - 100 == b && parseInt(tile[i].style.left) == a) 
            {
                return i;
            }
        }
    }
    else
    {
        return -1;
    } 
}

function mveUp (x, y) {
    var a = parseInt(x);
    var b = parseInt(y);
    if (b > 0)
    {
        for (var i=0; i<tile.length; i++)
        {
            if (parseInt(tile[i].style.top) + 100 == b && parseInt(tile[i].style.left) == a) 
            {
                return i;
            }
        } 
    }
    else 
    {
        return -1;
    }
}
