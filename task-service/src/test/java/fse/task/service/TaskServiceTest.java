package fse.task.service;

import fse.task.model.Task;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.annotation.Resource;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TaskServiceTest {

    @Resource
    private TaskService taskService;

    @Test
    public void findAllTasks() {
    }

    @Test
    public void findById() {
    }

    @Test
    public void updateTask() {
    }

    @Test
    public void addTask() {
        final Task task = new Task();
        taskService.addTask(task);
    }

    @Test
    public void deleteTask() {
    }
}