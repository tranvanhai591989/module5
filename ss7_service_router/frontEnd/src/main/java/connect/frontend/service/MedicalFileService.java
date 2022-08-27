package connect.frontend.service;

import connect.frontend.model.MedicalFile;

import java.util.List;
import java.util.Optional;

public interface MedicalFileService {
    List<MedicalFile> findAllPagination(Integer page);

    List<MedicalFile> findAllNoPagination();

    List<MedicalFile> search(String doctor, String patient, String reason, String treatments, Integer page);

    Optional<MedicalFile> findById(Integer id);

    void save(MedicalFile medicalFile);

    void update(MedicalFile medicalFile);

    void delete(Integer id);
}
