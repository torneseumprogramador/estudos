package controllers;

import models.Task;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;
import views.html.index;

import com.avaje.ebean.common.BeanList;

public class Application extends Controller {
  
    public static Result index() {
    	return ok(index.render());
    }
    
    public static Result getJson(){
    	BeanList<Task> tasks = (BeanList<Task>) Task.find.all();
    	return ok(Json.toJson(tasks));
    }
}
