package fse.task.service.controllers;

import fse.task.service.data.jpa.TaskRepository;
import fse.task.service.model.ParentTask;
import fse.task.service.model.Task;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class TaskController {
    @Resource
    private TaskRepository taskRepository;

    @GetMapping("/tasks")
    public List<Task> findAllTasks() {
        return taskRepository.findAll();
    }

    @GetMapping("/task/{id}")
    public Task findTask(@PathVariable(value = "id") Long id) {
        Optional<Task> task = taskRepository.findById(id);
        return task.orElse(null);
    }

    @PutMapping("/task/{id}")
    public void updateTask(@PathVariable(value = "id") Long id, @RequestBody Task task) {
        task.setId(id);
        taskRepository.save(task);
    }

    @DeleteMapping("/task/{id}")
    public void deleteTask(@PathVariable(value = "id") Long id) {
        taskRepository.deleteById(id);
    }

    @PostMapping("/task")
    public void addTask(@RequestBody Task task) {
        ParentTask parentTask = new ParentTask();
        parentTask.setTitle(task.getParentTask().getTitle());
        task.setParentTask(parentTask);
        taskRepository.save(task);
        this.taskRepository.flush();
    }
}
