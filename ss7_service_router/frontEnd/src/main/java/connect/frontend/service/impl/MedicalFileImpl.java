package connect.frontend.service.impl;

import connect.frontend.model.MedicalFile;
import connect.frontend.repository.MedicalFileRepository;
import connect.frontend.service.MedicalFileService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class MedicalFileImpl implements MedicalFileService {
    @Autowired
    private MedicalFileRepository medicalFileRepository;

    @Override
    public List<MedicalFile> findAllPagination(Integer page) {
        return medicalFileRepository.findAllPagination(page);
    }

    @Override
    public List<MedicalFile> findAllNoPagination() {
        return medicalFileRepository.findAllNoPagination();
    }

    @Override
    public List<MedicalFile> search(String doctor, String patient, String reason, String treatments, Integer page) {
        return medicalFileRepository.search(doctor, patient, reason, treatments, page);
    }

    @Override
    public Optional<MedicalFile> findById(Integer id) {
        return medicalFileRepository.findById(id);
    }

    @Override
    public void save(MedicalFile medicalFile) {
        medicalFileRepository.save(medicalFile.getPatient().getId(), medicalFile.getStartDay(), medicalFile.getEndDay(), medicalFile.getReason(), medicalFile.getTreatments(), medicalFile.getDoctor());

    }

    @Override
    public void update(MedicalFile medicalFile) {
        medicalFileRepository.update(medicalFile.getStartDay(), medicalFile.getEndDay(), medicalFile.getReason(), medicalFile.getTreatments(), medicalFile.getDoctor(), medicalFile.getId());

    }

    @Override
    public void delete(Integer id) {
        medicalFileRepository.delete(id);
    }
}
