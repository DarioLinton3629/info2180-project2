var tile;
var image;
var empty = '300px';
var em = '300px';
var test="url('data:image/jpeg;base64,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')";

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
  var images= ["url('data:image/jpeg;base64,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')","url('http://3-photos7.motorcar.com/used-2013-lamborghini-gallardo-2013lamborghinigallardolp5502withonly34771miles-13253-16906214-2-1024.jpg')","url('https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Jamaica.svg/1200px-Flag_of_Jamaica.svg.png')","url('https://loopnewslive.blob.core.windows.net/liveimage/sites/default/files/2018-03/7t4AZpjjjY.jpg')"];
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
