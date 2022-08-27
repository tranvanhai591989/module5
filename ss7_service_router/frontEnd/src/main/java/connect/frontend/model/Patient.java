package connect.frontend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.List;

@Entity
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    @OneToMany(mappedBy = "patient")
    @JsonBackReference
    private List<MedicalFile> medicalFiles;

    public Patient() {
    }

    public Patient(Integer id, String name, List<MedicalFile> medicalFiles) {
        this.id = id;
        this.name = name;
        this.medicalFiles = medicalFiles;
    }

    public Patient(int parseInt) {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<MedicalFile> getMediCalFiles() {
        return medicalFiles;
    }

    public void setMediCalFiles(List<MedicalFile> mediCalFiles) {
        this.medicalFiles = mediCalFiles;
    }
}
