/**************************************************
Trivantis (http://www.trivantis.com)
**************************************************/

var _N_Line=0;
var _nav4 = (document.layers) ? 1 : 0;
var lineColor=null

function MatchLine(theX0, theY0, theX1, theY1, theZord, theColor, theSize )
{ 
  this.ID="Line"+_N_Line; _N_Line++;
  this.X0=theX0;
  this.Y0=theY0;
  this.X1=theX1;
  this.Y1=theY1;
  this.Color=theColor;
  if( !this.Color ) this.Color ='0000ff';
  if( !lineColor ) lineColor = this.Color
  this.Size=theSize;
  if( !this.Size ) this.Size=3;
  this.ResizeTo=_LineResizeTo;
  
  var xx0, yy0, xx1, yy1, ll, rr, tt, bb, ww, hh, ccl, ccr, cct, ccb;
  var ss2=Math.floor(this.Size/2);
  if (theX0<=theX1) { ll=theX0; rr=theX1; }
  else { ll=theX1; rr=theX0; }
  if (theY0<=theY1) { tt=theY0; bb=theY1; }
  else { tt=theY1; bb=theY0; }
  ww=rr-ll; hh=bb-tt;
  if (_nav4)
    window.document.writeln("<layer left="+eval(ll-ss2)+" top="+eval(tt-ss2)+" id='"+this.ID+"' z-Index="+theZord+"></layer>");
  else
    window.document.write("<div id='"+this.ID+"' style='position:absolute;left:"+eval(ll-ss2)+";top:"+eval(tt-ss2)+"; width:"+eval(ww+this.Size)+"; height:"+eval(hh+this.Size)+"; z-index:"+theZord+"'></div>");
  return(this);
}
function _LineResizeTo(theX0, theY0, theX1, theY1)
{ var xx0, yy0, xx1, yy1, ll, rr, tt, bb, ww, hh, ccl, ccr, cct, ccb, id=this.ID,lay=0,divtext="";
  var ss2=Math.floor(this.Size/2);
  if (theX0!="") this.X0=theX0;
  if (theY0!="") this.Y0=theY0;
  if (theX1!="") this.X1=theX1;
  if (theY1!="") this.Y1=theY1;
  if (this.X0<=this.X1) { ll=this.X0; rr=this.X1; }
  else { ll=this.X1; rr=this.X0; }
  if (this.Y0<=this.Y1) { tt=this.Y0; bb=this.Y1; }
  else { tt=this.Y1; bb=this.Y0; }
  ww=rr-ll; hh=bb-tt;
  if (_nav4)
  { with(window.document.layers[id])
    { top=tt-ss2;
      left=ll-ss2;
      document.open();
      if ((ww==0)||(hh==0))
        document.writeln("<layer left=2 top=2><img src='images/o_"+this.Color+".gif' width="+eval(ww+this.Size)+" height="+eval(hh+this.Size)+" border=0 align=top valign=left></layer>");
      else
      { if (ww>hh)
        { ccr=0;
          cct=0;
          while (ccr<ww)
          { ccl=ccr;
            while ((Math.round(ccr*hh/ww)==cct)&&(ccr<=ww)) ccr++;
            if (this.Y1>this.Y0)
              document.writeln("<layer left="+eval(ccl+2)+" top="+eval(cct+2)+"'>");
            else
              document.writeln("<layer left="+eval(ww-ccr+2)+" top="+eval(cct+2)+"'>");
            document.writeln("<img src='"+"images/o_"+this.Color+".gif"+"' width="+eval(ccr-ccl+this.Size)+" height="+this.Size+" border=0 align=top valign=left></layer>");
            cct++;
          }
        }
        else
        { ccb=0;
          ccl=0;
          while (ccb<hh)
          { cct=ccb;
            while ((Math.round(ccb*ww/hh)==ccl)&&(ccb<hh)) ccb++;
            if (this.Y1>this.Y0)
              document.writeln("<layer left="+eval(ccl+2)+" top="+eval(cct+2)+"'>");
            else
              document.writeln("<layer left="+eval(ww-ccl+2)+" top="+eval(cct+2)+"'>");
            document.writeln("<img src='"+"images/o_"+this.Color+".gif"+"' width="+this.Size+" height="+eval(ccb-cct+this.Size)+" border=0 align=top valign=left></layer>");
            ccl++;
          }
        }
      }
      document.close();
    }            
  }
  else
  { if (document.all) selObj=eval("window.document.all."+id);
    else selObj=window.document.getElementById(id);
    with (selObj.style)
    { left=ll-ss2;
      top=tt-ss2;
      width=ww+this.Size;
      height=hh+this.Size;
    }
    if ((ww==0)||(hh==0))
      divtext+="<div style='position:absolute;left:0;top:0'><img src='images/o_"+this.Color+".gif' width="+eval(ww+this.Size)+" height="+eval(hh+this.Size)+"></div>";
    else
    { if (ww>hh)
      { ccr=0;
        cct=0;
        while (ccr<ww)
        { ccl=ccr;
          while ((Math.round(ccr*hh/ww)==cct)&&(ccr<=ww)) ccr++;
          if (this.Y1>this.Y0)
            divtext+="<div style='position:absolute;left:"+ccl+";top:"+cct+"'>";
          else
            divtext+="<div style='position:absolute;left:"+eval(ww-ccr)+";top:"+cct+"'>";
          divtext+="<img src='"+"images/o_"+this.Color+".gif"+"' width="+eval(ccr-ccl+this.Size)+" height="+this.Size+"></div>";
          cct++;
        }
      }
      else
      { ccb=0;
        ccl=0;
        while (ccb<hh)
        { cct=ccb;
          while ((Math.round(ccb*ww/hh)==ccl)&&(ccb<hh)) ccb++;
          if (this.Y1>this.Y0)
            divtext+="<div style='position:absolute;left:"+ccl+";top:"+cct+"'>";
          else
            divtext+="<div style='position:absolute;left:"+eval(ww-ccl)+";top:"+cct+"'>";
          divtext+="<img src='"+"images/o_"+this.Color+".gif"+"' width="+this.Size+" height="+eval(ccb-cct+this.Size)+"></div>";
          ccl++;
        }
      }
    }      
    selObj.innerHTML=divtext;
  }
}

var LML = null
var LMR = null

function ObjMatchDown() {
  if( is.ie && event.button != 1 ) return
  if( this.leftSel ) {
    if( LML == this ) {
      if( LML.matchObj != null ) {
        LML.matchObj.matchObj = null
        LML.matchObj = null
        LML.matchLine.ResizeTo( -10, -10, -10, -10 )
        if( LML.updateVarFunc ) LML.updateVarFunc()
      }
      LML = null
    }
    else {
      if( !is.ns4 && LML ) LML.showBorder( false )
      LML = this
    }
    
    if( !is.ns4 ) this.showBorder( LML )
  }
  else if( this.rightSel ) {
    if( LMR == this ) {
      if( LMR.matchObj != null ) {
        var tmpLML = LMR.matchObj
        LMR.matchObj.matchObj = null
        LMR.matchObj = null
        tmpLML.matchLine.ResizeTo( -10, -10, -10, -10 )
        if( tmpLML.updateVarFunc ) tmpLML.updateVarFunc()
      }
      LMR = null
    }
    else {
      if( !is.ns4 && LMR ) LMR.showBorder( false )
      LMR = this
    }
    if( !is.ns4 ) this.showBorder( LMR )
  }
  
  if( LML && LMR && LML.updateVarFunc == LMR.updateVarFunc ) {
    if( LML.matchObj == null || ( LML.matchObj != LMR && LMR.matchObj != LML ) )
    {
      if( LML.matchObj != null )
        LML.matchObj.matchObj = null
      LML.matchObj = LMR
      if( LMR.matchObj != null ) {
        LMR.matchObj.matchObj = null
        LMR.matchObj.matchLine.ResizeTo( -10, -10, -10, -10 )
      }
      LMR.matchObj = LML
      
      LML.drawLine()
      if( LML.updateVarFunc ) LML.updateVarFunc()
    }
    else
    {
      if( LML.matchObj != null ) {
        if( !is.ns4 ) {
          if( this.bBorder ) setTimeout( this.obj+".showBorder()", 1000 )
          if( this.matchObj.bBorder ) setTimeout( this.matchObj.obj+".showBorder()", 1000 )
        }
      }
    }
    
    LML = null
    LMR = null
  }
  
  this.onSelect()
  this.onDown()
}

function ObjMatchDrawLine() {
    if( !this.matchLine ) return;
    
    var fdX   = this.w / 2
    var fdY   = this.h / 2
    var fromX = this.x + fdX + this.offX
    var fromY = this.y + fdY + this.offY
    var tdX   = this.matchObj.w / 2
    var tdY   = this.matchObj.h / 2
    var toX   = this.matchObj.x + tdX + this.matchObj.offX
    var toY   = this.matchObj.y + tdY + this.matchObj.offY

    if( fromX + fdX < toX - tdY - 5)
    {
      fromX += fdX
      toX   -= tdX + 5
    }
    else if( fromX - fdX - 5 > toX + tdX)
    {
      fromX -= fdX + 5
      toX   += tdX
    }
    else if( fromY + fdY < toY - tdY - 5)
    {
      fromY += fdY
      toY   -= tdY + 5
    }
    else if( fromY - fdY - 5 > toY + tdY)
    {
      fromY -= fdY + 5
      toY   += tdY
    }

    if( fromX < toX )
      this.matchLine.ResizeTo( fromX, fromY, toX, toY )
    else
      this.matchLine.ResizeTo( toX, toY, fromX, fromY )
    
    if( !is.ns4 ) {
      if( this.bBorder ) setTimeout( this.obj+".showBorder()", 1000 )
      if( this.matchObj.bBorder ) setTimeout( this.matchObj.obj+".showBorder()", 1000 )
    }
}

function ObjMatchImageBorder( on ) {
  if( on ) {
    this.objLyr.moveBy( -2,-2 )
    this.objLyr.styObj.borderWidth = 2
    this.objLyr.styObj.borderStyle = 'solid'
    this.objLyr.styObj.borderColor = lineColor
    this.objLyr.clipTo( 0, this.objLyr.w+4, this.objLyr.h+4, 0 )
  }
  else {
    this.objLyr.styObj.backgroundColor = ''
    this.objLyr.moveBy( 2,2 )
    this.objLyr.styObj.borderStyle = is.ie ? '' : 'inherit'
    this.objLyr.clipTo( 0, this.objLyr.w, this.objLyr.h, 0 )
  }
  this.bBorder = on
}

function ObjMatchInlineBorder( on ) {
  if( on ) {
    this.objLyr.moveBy( -2,-2 )
    this.objLyr.styObj.borderWidth = 2
    this.objLyr.styObj.borderStyle = 'solid'
    this.objLyr.styObj.borderColor = lineColor
  }
  else {
    this.objLyr.moveBy( 2,2 )
    this.objLyr.styObj.borderStyle = is.ie ? '' : 'inherit'
  }
  this.bBorder = on
}

function ObjMatchSetup( bLeft, id, updVarFunc, zLow, Color ) {
  this.capture=4
  this.updateVarFunc = updVarFunc
  if( bLeft ) {
    this.leftSel=id
    this.matchLine = new MatchLine( -10, -10, -10, -10, zLow-1, Color )
  }
  else this.rightSel = id
}

function ObjMatchOffset( left, top ) {
  this.offX = left
  this.offY = top
  if( this.matchObj ) {
    this.drawLine()
  }
}

function ObjMatchReset() {
  if( this.matchLine ) {
    this.matchLine.ResizeTo( -10, -10, -10, -10 );
    
    if( this.rightSel ) {
      this.rightSel.leftSel = 0;
      this.rightSel         = 0;
    }
  }
  
  if( this.matchObj ) {
    this.matchObj.matchObj = null;
    this.matchObj          = null;
  }
  
  if( !is.ns4 ) {
    if( this.bBorder ) this.showBorder();
    if( this.matchObj ) {
      if( this.matchObj.bBorder ) this.matchObj.showBorder();
    }
  }
  
  if ( LML )  LML = null;
  if ( LMR )  LMR = null;
}

{ // Extend prototypes
var inl = ObjInline.prototype
inl.leftSel         = 0
inl.rightSel        = 0
inl.offX            = 0
inl.offY            = 0
inl.down            = ObjMatchDown
inl.drawLine        = ObjMatchDrawLine
inl.matchLine       = null
inl.matchObj        = null
inl.updateVarFunc   = null
inl.showBorder      = ObjMatchInlineBorder
inl.setupMatch      = ObjMatchSetup
inl.offsetMatch     = ObjMatchOffset
inl.bBorder         = false
inl.reset           = ObjMatchReset

var img = ObjImage.prototype
img.leftSel         = 0
img.rightSel        = null
img.offX            = 0
img.offY            = 0
img.down            = ObjMatchDown
img.drawLine        = ObjMatchDrawLine
img.matchLine       = null
img.matchObj        = null
img.updateVarFunc   = null
img.showBorder      = ObjMatchImageBorder
img.setupMatch      = ObjMatchSetup
img.offsetMatch     = ObjMatchOffset
img.bBorder         = false
img.reset           = ObjMatchReset
}