package controllers;

import java.util.Map;

import models.Task;
import play.data.Form;
import play.mvc.Controller;
import play.mvc.Result;
import views.html.tasks.editar;
import views.html.tasks.index;
import views.html.tasks.novo;

import com.avaje.ebean.common.BeanList;

public class Tasks extends Controller {
	public static Result novo() {
		return ok(novo.render());
	}

	public static Result editar(Long id) {
		Task task = Task.find.byId(id);
		return ok(editar.render(task));
	}

	public static Result index() {
		BeanList<Task> tasks = (BeanList<Task>) Task.find.all();
		return ok(index.render(tasks));
	}

	public static Result update(Long id) {
		try {
			Task task = Task.find.byId(id);
			Map<String, String> data = Form.form(Task.class).bindFromRequest()
					.data();
			task.name = data.get("name");
			task.setDueDate(data.get("dueDate"));
			task.done = data.get("done") == null ? false : true;
			task.save();

			return redirect(routes.Tasks.index());
		} catch (Exception erro) {
			return badRequest("erro ao atualizar : " + erro.getMessage());
		}
	}

	public static Result apagar(Long id) {
		// new Task(id).delete(); // falar com o bibinha
		Task.find.byId(id).delete();
		return redirect(routes.Tasks.index());
	}

	public static Result criar() {
		try {
			Map<String, String> data = Form.form(Task.class).bindFromRequest()
					.data();
			/*
			 * falar com o bibinha Form<Task> form =
			 * Form.form(Task.class).bindFromRequest(); if(form.errors().size()
			 * > 0){ return ok("Erro ao cadastrar \n" + form.errors().toString()
			 * + "\n" + form.toString() + "\n|" + form.data().get("name") + "|"
			 * + "\n|" + form.data().get("dueDate") + "|" + ""); }
			 * 
			 * Task task = form.get(); task.save();
			 */

			Task task = new Task();
			task.name = data.get("name");
			task.setDueDate(data.get("dueDate"));
			task.done = data.get("done") == null ? false : true;
			task.save();
			return redirect(routes.Tasks.index());
		} catch (Exception erro) {
			return badRequest("erro ao criar : " + erro.getMessage());
		}
	}
}
