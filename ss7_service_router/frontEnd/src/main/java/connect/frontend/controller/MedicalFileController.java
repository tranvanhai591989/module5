package connect.frontend.controller;

import connect.frontend.dto.MedicalFileDto;
import connect.frontend.service.MedicalFileService;
import connect.frontend.model.MedicalFile;
import connect.frontend.model.Patient;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/medicalFile")
public class MedicalFileController {
    @Autowired
    MedicalFileService medicalFileService;

    @GetMapping("/list")
    public ResponseEntity<List<MedicalFile>> findAllPagination(@RequestParam(value = "page", required = false) Integer page) {
        List<MedicalFile> patients = medicalFileService.findAllPagination(page);
        if (patients.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(patients, HttpStatus.OK);
    }

    @GetMapping("/list-no-pagination")
    public ResponseEntity<List<MedicalFile>> findAllNoPagination() {
        List<MedicalFile> medicalFiles = medicalFileService.findAllNoPagination();
        if (medicalFiles.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(medicalFiles, HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<List<MedicalFile>> search(@RequestParam(value = "doctor", required = false, defaultValue = "") String doctor, @RequestParam(value = "name", required = false, defaultValue = "") String name, @RequestParam(value = "reason", required = false, defaultValue = "") String reason, @RequestParam(value = "method", required = false, defaultValue = "") String method, @RequestParam(value = "page", required = false) Integer page) {
        List<MedicalFile> medicalFiles = medicalFileService.search(doctor, name, reason, method, page);
        if (medicalFiles.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(medicalFiles, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<MedicalFile> findById(@PathVariable Integer id) {
        Optional<MedicalFile> medicalFile = medicalFileService.findById(id);
        if (!medicalFile.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(medicalFile.get(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity add(@Validated @RequestBody MedicalFileDto medicalFileDto, BindingResult bindingResult) {
        if (!medicalFileDto.getStartDay().equals("") && !medicalFileDto.getEndDay().equals("")) {
            new MedicalFileDto().validate(medicalFileDto, bindingResult);
        }

        if (bindingResult.hasFieldErrors()) {
            return new ResponseEntity<>(bindingResult.getAllErrors(), HttpStatus.NOT_FOUND);
        }

        MedicalFile medicalFile = new MedicalFile();

        BeanUtils.copyProperties(medicalFileDto, medicalFile);

        medicalFile.setPatient(new Patient(Integer.parseInt(medicalFileDto.getPatient())));

        medicalFile.setStartDay(LocalDate.parse(medicalFileDto.getStartDay()));

        medicalFile.setEndDay(LocalDate.parse(medicalFileDto.getEndDay()));

        medicalFileService.save(medicalFile);

        return new ResponseEntity(HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<MedicalFile> update(@PathVariable Integer id, @Validated @RequestBody MedicalFileDto medicalFileDto, BindingResult bindingResult) {
        Optional<MedicalFile> currentMedicalFile = medicalFileService.findById(id);

        if (!medicalFileDto.getStartDay().equals("") && !medicalFileDto.getEndDay().equals("")) {
            new MedicalFileDto().validate(medicalFileDto, bindingResult);
        }

        if (bindingResult.hasFieldErrors()) {
            return new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
        }

        if (!currentMedicalFile.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        currentMedicalFile.get().setId(medicalFileDto.getId());

        currentMedicalFile.get().setPatient(new Patient(Integer.parseInt(medicalFileDto.getPatient())));

        currentMedicalFile.get().setStartDay(LocalDate.parse(medicalFileDto.getStartDay()));

        currentMedicalFile.get().setEndDay(LocalDate.parse(medicalFileDto.getEndDay()));

        currentMedicalFile.get().setReason(medicalFileDto.getReason());

        currentMedicalFile.get().setTreatments(medicalFileDto.getTreatments());

        currentMedicalFile.get().setDoctor(medicalFileDto.getDoctor());

        medicalFileService.update(currentMedicalFile.get());

        return new ResponseEntity(currentMedicalFile.get(), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<MedicalFile> delete(@PathVariable Integer id) {
        Optional<MedicalFile> medicalFile = medicalFileService.findById(id);

        if (!medicalFile.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        medicalFileService.delete(id);

        return new ResponseEntity(HttpStatus.OK);
    }
}
