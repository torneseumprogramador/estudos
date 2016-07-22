package models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.joda.time.DateTime;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;

import play.data.format.Formats;
import play.db.ebean.Model;

@Entity
@Table(name = "tasks")
public class Task extends Model {
	private static final long serialVersionUID = 1L;

	public Task() {
	}

	public Task(Long id) {
		this.id = id;
	}

	public Task(String name, Boolean done, DateTime dueDate) {
		this.name = name;
		this.done = done;
		this.dueDate = dueDate;
	}

	// @Constraints.Min(10)`
	@Id
	public Long id;

	// @Constraints.Required
	public String name;

	public boolean done;

	@Formats.DateTime(pattern = "dd/MM/yyyy")
	public DateTime dueDate = new DateTime();
	
	public void setDueDate(String date){
		DateTimeFormatter format = DateTimeFormat.forPattern("dd/MM/yyyy");
		DateTime dueDate = format.parseDateTime(date);
		this.dueDate = dueDate;
	}
	
	public static Finder<Long, Task> find = new Finder<Long, Task>(Long.class,
			Task.class);

}