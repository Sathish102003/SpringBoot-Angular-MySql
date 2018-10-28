package fse.task.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "TASK")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "TASK_SEQ")
    @SequenceGenerator(sequenceName = "TASK_SEQ", name = "TASK_SEQ", allocationSize = 1)
    private long id;

    private String title;

    private String summary;

    private Date startDate;

    private Date endDate;

    private Integer priority;

    @ManyToOne
    @JoinColumn(name = "PARENT_TASK_ID")
    private ParentTask parentTask;
}
