package connect.frontend.service.impl;

import connect.frontend.service.PatientService;
import connect.frontend.model.Patient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import connect.frontend.repository.PatientRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PatientImpl  implements PatientService {
    @Autowired
    private PatientRepository patientRepository;
    @Override
    public List<Patient> findAll() {
        return patientRepository.findAll();
    }

    @Override
    public Optional<Patient> findById(Integer id) {
        return patientRepository.findById(id);
    }

    @Override
    public void save(Patient patient) {
        patientRepository.save(patient.getName());
    }

    @Override
    public void update(Patient patient) {
        patientRepository.update(patient.getName(), patient.getId());
    }
}
