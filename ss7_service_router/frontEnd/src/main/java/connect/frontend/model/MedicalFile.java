package connect.frontend.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class MedicalFile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @ManyToOne
    @JoinColumn(referencedColumnName = "id")
    private Patient patient;
    private LocalDate startDay;
    private LocalDate endDay;
    private String reason;
    private String treatments;
    private String doctor;

    public MedicalFile() {
    }

    public MedicalFile(Integer id, Patient patient, LocalDate startDay, LocalDate endDay, String reason, String treatments, String doctor) {
        this.id = id;
        this.patient = patient;
        this.startDay = startDay;
        this.endDay = endDay;
        this.reason = reason;
        this.treatments = treatments;
        this.doctor = doctor;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public LocalDate getStartDay() {
        return startDay;
    }

    public void setStartDay(LocalDate startDay) {
        this.startDay = startDay;
    }

    public LocalDate getEndDay() {
        return endDay;
    }

    public void setEndDay(LocalDate endDay) {
        this.endDay = endDay;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getTreatments() {
        return treatments;
    }

    public void setTreatments(String treatments) {
        this.treatments = treatments;
    }

    public String getDoctor() {
        return doctor;
    }

    public void setDoctor(String doctor) {
        this.doctor = doctor;
    }
}
