package fse.task.controllers;

import fse.task.model.Task;
import fse.task.service.TaskService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class TaskController {
    @Resource
    private TaskService taskService;

    @GetMapping("/tasks")
    public List<Task> findAllTasks() {
        return taskService.findAllTasks();
    }

    @GetMapping("/task/{id}")
    public Task findTask(@PathVariable(value = "id") Long id) {
        return taskService.findById(id);
    }

    @PutMapping("/task/{id}")
    public void updateTask(@PathVariable(value = "id") Long id, @RequestBody Task task) {
        task.setId(id);
        taskService.updateTask(task);
    }

    @DeleteMapping("/task/{id}")
    public void deleteTask(@PathVariable(value = "id") Long id) {
        taskService.deleteTask(id);
    }

    @PostMapping("/task")
    public void addTask(@RequestBody Task task) {
        taskService.addTask(task);
    }
}
