    if(Items.find().count() ===0){
    	var items = [
             {category:'building',parent:null, item:'a'}
            ,{category:'building',parent:'building', item: 'bldg1', pn:'1'}
    		,{category:'building',parent:'building', item: 'bldg2', pn:'2'}
            ,{category:'building',parent:'building', item: 'bldg3', pn:'3'}
            ,{category:'car',parent:null, item:'a'}
            ,{category:'car',parent:'building', item: 'car1', pn:'1'}
            ,{category:'car',parent:'building', item: 'car2', pn:'2'}
            ,{category:'car',parent:'building', item: 'car3', pn:'3'}
            ,{category:'car',parent:'building', item: 'car4', pn:'4'}
            ,{category:'car',parent:'building', item: 'car5', pn:'5'}
            ,{category:'park',parent:null, item:'a'}
            ,{category:'park',parent:'building', item: 'park1', pn:'1'}
            ,{category:'park',parent:'building', item: 'park2', pn:'2'}
            ,{category:'park',parent:'building', item: 'park3', pn:'3'}
            ,{category:'park',parent:'building', item: 'park4', pn:'4'}
            ,{category:'park',parent:'building', item: 'car5', pn:'5'}
            ,{category:'machine',parent:null, item:'a'}
            ,{category:'machine',parent:'building', item: 'machine1', pn:'1'}
            ,{category:'machine',parent:'building', item: 'machine2', pn:'2'}
            ,{category:'machine',parent:'building', item: 'machine3', pn:'3'}
            ,{category:'machine',parent:'building', item: 'machine4', pn:'4'}
            ,{category:'machine',parent:'building', item: 'machine5', pn:'5'}
    	];
	    _.each(items, function (item){
    		console.log ("create Items "+item.category+' - '+item.parent);
	    	var itemid= Items.insert(item)
	    })
	}
