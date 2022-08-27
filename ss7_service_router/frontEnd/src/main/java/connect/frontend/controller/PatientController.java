package connect.frontend.controller;

import connect.frontend.model.Patient;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import connect.frontend.service.PatientService;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/patient")
public class PatientController {
    @Autowired
    PatientService patientService;
    @GetMapping()
    public ResponseEntity<List<Patient>> getList() {
        List<Patient> patients = patientService.findAll();
        if (patients.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(patients, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Patient> findById(@PathVariable Integer id) {
        Optional<Patient> patient = patientService.findById(id);
        if (!patient.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(patient.get(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity save(@RequestBody Patient patient) {
        patientService.save(patient);
        return new ResponseEntity(HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Patient> update(@PathVariable Integer id, @RequestBody Patient patient) {
        Optional<Patient> currentPatienter = patientService.findById(id);

        if (!currentPatienter.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        BeanUtils.copyProperties(patient, currentPatienter.get());

        patientService.update(currentPatienter.get());

        return new ResponseEntity(currentPatienter.get(), HttpStatus.OK);
    }
}
