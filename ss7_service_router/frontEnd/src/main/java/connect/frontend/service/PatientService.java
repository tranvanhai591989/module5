package connect.frontend.service;

import connect.frontend.model.Patient;

import java.util.List;
import java.util.Optional;

public interface PatientService {
    List<Patient> findAll();

    Optional<Patient> findById(Integer id);

    void save(Patient patient);

    void update(Patient patient);

}
