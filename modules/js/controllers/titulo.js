var Titulo=function(titulo){
	this.titulo=titulo;

	return {
			get:function(){
				return this.titulo;
			}
}
}

module.exports=Titulo